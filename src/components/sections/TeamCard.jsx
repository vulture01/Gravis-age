function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamCard({ member, compact = false }) {
  return (
    <div className="group rounded-xl2 border border-line bg-white p-8 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover hover:border-blue-200">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-lg font-display font-semibold text-white transition-colors duration-300 group-hover:bg-blue-500">
        {initials(member.name)}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-ink-900">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-600">
        {member.title}
        {member.positioning ? ` · ${member.positioning}` : ""}
      </p>

      {!compact && (
        <>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{member.bio}</p>

          <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
            {member.strengths.map((strength) => (
              <li
                key={strength}
                className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
              >
                {strength}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
