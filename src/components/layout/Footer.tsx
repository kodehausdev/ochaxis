export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-sm text-neutral-700">
        
        {/* Studio */}
        <div>
          <p className="font-medium text-neutral-900">
            Ochaxis Design Studio
          </p>
          <p className="mt-2">
            Interior design practice & teaching
          </p>
        </div>

        {/* Visit */}
        <div>
          <p className="font-medium text-neutral-900">
            Visit
          </p>
          <p className="mt-2">
            Physical studio<br />
            Abuja, Nigeria
          </p>
        </div>

        {/* Connect */}
        <div>
          <p className="font-medium text-neutral-900">
            Connect
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="https://instagram.com/ochaxis"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:info@ochaxisdesigns.com"
                className="hover:text-neutral-900 transition"
              >
                info@ochaxisdesigns.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Ochaxis. All rights reserved.
      </div>
    </footer>
  );
}