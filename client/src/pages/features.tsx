import { FileText, Search, Calculator, ChartLine, Target, RefreshCw, CheckCircle } from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: FileText,
      title: "AI Proposal Generation",
      description: "Generate comprehensive, professional proposals in minutes instead of hours. Our AI analyzes project requirements and creates detailed, competitive proposals automatically.",
      features: [
        "Instant proposal creation",
        "Custom branding integration",
        "Competitive pricing analysis",
        "Professional formatting",
      ],
    },
    {
      icon: Search,
      title: "Intelligent Inspection Analysis",
      description: "Advanced AI analyzes roof conditions from photos and data, identifying issues, damage patterns, and recommending solutions with unprecedented accuracy.",
      features: [
        "Automated damage detection",
        "Condition assessment scoring",
        "Repair prioritization",
        "Detailed reporting",
      ],
    },
    {
      icon: Calculator,
      title: "Precision Cost Estimation",
      description: "Get accurate cost estimates based on real-time material prices, labor rates, and project complexity. Turn 'later' into 'already handled.'",
      features: [
        "Real-time pricing data",
        "Labor cost calculation",
        "Material optimization",
        "Profit margin analysis",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: ChartLine,
      title: "Performance Tracking",
      description: "Monitor key metrics and KPIs in real-time",
    },
    {
      icon: Target,
      title: "Predictive Insights",
      description: "AI-powered forecasting for better decision making",
    },
    {
      icon: RefreshCw,
      title: "Automated Reporting",
      description: "Generate reports automatically for stakeholders",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              AI-Powered <span className="gradient-text neon-glow">Features</span>
            </h1>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              The upgrade your rivals can't outwork. Once you see it, there's no going back.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-black/80 rounded-xl p-8 glow-border hover:glow-effect transition-all duration-300"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="mb-6">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-4 text-primary neon-glow">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold neon-glow">Advanced Analytics Dashboard</h2>
              <p className="text-lg text-white">
                Imagine closing faster than they can open their laptop. Our analytics dashboard provides real-time insights into your business performance, project pipelines, and growth opportunities.
              </p>
              <ul className="space-y-3">
                {additionalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <Icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">{feature.title}</span>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Business analytics dashboard"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
