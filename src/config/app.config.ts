interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Book a table',
    'Edit personal information',
    'View restaurant menus',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage user information',
    'Manage booking information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2aba2a05-2347-420b-a466-2ec5889970c2',
};
