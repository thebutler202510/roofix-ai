import { Route, Switch } from "wouter";
import Features from "./pages/features";
import Pricing from "./pages/pricing";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600">Page not found</p>
      </div>
    </div>
  );
}
