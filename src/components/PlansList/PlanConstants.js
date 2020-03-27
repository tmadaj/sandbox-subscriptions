const freePlan = {
  Name: 'free',
  Title: 'Free',
  Pricing: {
    1: 0,
    12: 0,
    24: 0,
  },
  Cycle: 1,
  MaxMembers: 1,
  MaxSpace: 524288000,
  MaxAddresses: 1,
  MaxDomains: 0,
  MaxVPN: 0,
};

const descriptions = {
  free: 'The basics for private and secure communications',
  plus: 'Full-featured mailbox with  advanced protection',
  professional: 'ProtonMail for prodessionals and businesses',
  visionary: 'ProtonMail for families and small businesses',
};

const features = {
  free: '',
  plus: 'Supprots folders, labels, filters, auto-reply, IMAP/SMTP and more',
  professional:
    'Catch all email, multi user management, priority support and more',
  visionary: 'Includes all features',
};

const support = {
  free: '',
  plus: '',
  professional: '',
  visionary: 'Priority support',
};

export { freePlan, descriptions, features, support };
