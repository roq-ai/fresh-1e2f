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
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Nutrition Specialist', 'Meal Plan Creator', 'Course Instructor', 'Subscriber'],
  tenantName: 'Team',
  applicationName: 'fresh',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage communication',
    'Manage subscription',
    'Manage nutrition course',
    'Manage dietary guidance',
    'Manage meal plan',
    'Manage user',
    'Manage team',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/aaedd941-89a7-4459-b3ff-8694d854ac7c',
};
