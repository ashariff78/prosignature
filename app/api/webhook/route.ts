import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Update user's subscription status in Supabase
    const { error } = await supabase
      .from('profiles')
      .update({ 
        subscription_status: session.metadata.priceId === 'team' ? 'team' : 'pro',
        subscription_id: session.subscription
      })
      .eq('email', session.customer_email);

    if (error) console.error('Error updating user:', error);
  }

  return NextResponse.json({ received: true });
}