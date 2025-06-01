import { NextRequest, NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { priceId, userEmail } = await req.json();

    // Define prices
    const prices: { [key: string]: string } = {
      'pro': 'price_1RUcg5HDoGJQiibUcAckeM8H',
      'team': 'price_1RUch6HDoGJQiibU6NLqIdCm',
      'lifetime': 'price_1RVIVzHDoGJQiibU6oLmqGrH',
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices[priceId],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/pricing`,
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: 7,
      },
      customer_email: userEmail, // Pre-fill email if user is logged in
      metadata: {
        priceId: priceId
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}