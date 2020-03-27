function currencySymbol(currency) {
  switch (currency) {
    case 'EUR':
      return '€';
    case 'CHF':
      return 'CHF';
    case 'USD':
      return '$';
    default:
      return currency;
  }
}

function formatCycle(n) {
  switch (n) {
    case 1:
      return 'month';
    case 12:
      return 'year';
    case 24:
      return '2 years';
    default:
      return `${n} months`;
  }
}

function monthlyPrice(pricing, cycle) {
  return (pricing[cycle] / 100 / cycle).toFixed(2).replace('.00', '');
}

function cyclePrice(pricing, cycle) {
  return (pricing[cycle] / 100).toFixed(2).replace('.00', '');
}

function formatCycleBilling(pricing, cycleRaw, currencyRaw) {
  if (!pricing[cycleRaw]) return null;
  const currency = currencySymbol(currencyRaw);
  const price = cyclePrice(pricing, cycleRaw);
  const cycle = formatCycle(cycleRaw);

  return `Billed as ${currency}${price} per ${cycle}`;
}

function formatStorage(B) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let divided = B;
  let i = 0;

  for (; divided >= 1024; i++) {
    divided /= 1024;
  }

  return `${divided} ${units[i]}`;
}

function plural(n) {
  return n > 1 ? 's' : '';
}

function perUser(name) {
  return name === 'professional' ? ' per user' : '';
}

function formatUsers(members, name) {
  return name === 'professional'
    ? '1 - 5000 users'
    : `${members} user${plural(members)}`;
}

function formatDomains(domains) {
  return domains
    ? `Supports ${domains} domain${plural(domains)}`
    : 'No domain support';
}

function formatVPN(vpn) {
  return vpn ? 'Includes ProtonVPN' : 'ProtonVPN (optional)';
}

export {
  currencySymbol,
  formatCycle,
  formatCycleBilling,
  formatStorage,
  monthlyPrice,
  cyclePrice,
  plural,
  perUser,
  formatUsers,
  formatDomains,
  formatVPN,
};
