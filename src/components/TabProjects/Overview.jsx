import saba from "../../assets/saba.jpg";

export default function Overview() {
  return (
    <div className="w-full flex flex-col py-4 gap-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 w-full aspect-[1/1] overflow-hidden bg-primary/10 border border-primary/20 flex items-center justify-center relative">
          <img
            src={saba}
            alt="Saba Cat Hotel Overview"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-7 flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-3">
            <h4 className="text-base md:text-xl font-bold text-accent tracking-wide border-l-4 border-secondary pl-3">
              System Scope
            </h4>
            <p className="text-sm md:text-base text-accent leading-relaxed">
              Saba Cat Hotel is an end-to-end web application built to automate
              cat boarding management. It seamlessly connects Guests (searching
              rooms), Members (booking and uploading slips), and Admins
              (verifying payments, managing check-ins, and viewing revenue
              dashboards).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-base md:text-xl font-bold text-accent tracking-wide border-l-4 border-secondary pl-3">
              Key Business Logic
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <p className="text-sm md:text-base text-accent leading-relaxed">
                  <strong className="text-accent font-semibold">
                    Dynamic Inventory:
                  </strong>{" "}
                  Automatically calculates real-time room availability based on
                  selected dates to eliminate double-booking.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <p className="text-sm md:text-base text-accent leading-relaxed">
                  <strong className="text-accent font-semibold">
                    1-Hour Payment Timeout:
                  </strong>{" "}
                  Auto-cancels reservations if a 50% deposit slip isn't uploaded
                  within 1 hour, releasing rooms back to the active pool.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <p className="text-sm md:text-base text-accent leading-relaxed">
                  <strong className="text-accent font-semibold">
                    Tiered Refund Policy:
                  </strong>{" "}
                  Automates compliance logic calculating refunds based on notice
                  days (≥ 15 days = 100%, ≥ 7 days = 50%, &lt; 7 days =
                  Non-refundable).
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm md:text-base text-accent leading-relaxed">
          <strong className="text-accent font-semibold">Tech Stack:</strong>{" "}
          PHP, SQL, HTML, CSS, JavaScript, MySQL and Figma
        </p>
      </div>
    </div>
  );
}
