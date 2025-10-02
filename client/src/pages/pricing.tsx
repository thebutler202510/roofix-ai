import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 99,
      description: "Perfect for small roofing businesses",
      features: [
        "Up to 25 proposals/month",
        "Basic inspection analysis",
        "Cost estimation tools",
        "Email support",
        "Mobile app access",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: 299,
      description: "For growing roofing companies",
      features: [
        "Up to 100 proposals/month",
        "Advanced AI inspection analysis",
        "Precision cost estimation",
        "Analytics dashboard",
        "Priority support",
        "Team collaboration tools",
        "Custom branding",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: 799,
      description: "For large roofing enterprises",
      features: [
        "Unlimited proposals",
        "Enterprise AI features",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
      ],
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can change your plan at any time. Changes take effect immediately, and billing is prorated.",
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial on all plans. No credit card required to start.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide email support for Starter plans, priority support for Professional plans, and dedicated support for Enterprise customers.",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Choose Your <span className="gradient-text neon-glow">Revolution</span>
            </h1>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              If you don't believe in unfair advantages… don't look at this. RooFix AI: Don't worry. Obsession is normal.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-black/90 rounded-xl p-8 relative ${
                  plan.highlighted
                    ? "glow-border glow-effect"
                    : "border-2 border-primary"
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-black px-4 py-2 rounded-full text-sm font-bold glow-effect uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-primary neon-glow">{plan.name}</h3>
                  <p className="text-white mb-4">{plan.description}</p>
                  <div className="text-4xl font-black mb-2">
                    ${plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-bold py-3 uppercase tracking-wider ${
                    plan.highlighted
                      ? "bg-primary text-black hover:bg-primary glow-effect"
                      : "bg-secondary text-white hover:bg-secondary border-2 border-primary"
                  }`}
                  data-testid={`button-${plan.name.toLowerCase()}`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : plan.highlighted ? "Start Revolution" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 neon-glow">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/80 rounded-lg p-6 glow-border"
                  data-testid={`card-faq-${index}`}
                >
                  <h3 className="font-bold mb-2 text-primary">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
