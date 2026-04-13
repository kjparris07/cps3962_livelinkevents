import { membershipPlans } from "@/lib/memberships";

type Props = {
  searchParams: { plan?: string };
};

export default function MembershipConfirmationPage({ searchParams }: Props) {
  const planKey = searchParams.plan as keyof typeof membershipPlans | undefined;
  const plan = planKey ? membershipPlans[planKey] : undefined;

  return (
    <main className="membership-confirmation-page">
      <section className="confirmation-wrapper">
        <div className="membership-title">Membership Confirmed</div>

          <p className="membership-required-note">Your membership has been activated.</p>

        <div className="membership-required-note">
        <a href="/" className="btn btn-primary">
          Browse Events
        </a>
        </div>
      </section>
    </main>
  );
}