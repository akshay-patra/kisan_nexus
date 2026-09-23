const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// Helper to create directories
function createDir(dirPath) {
    const fullPath = path.join(rootDir, dirPath);
    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
    }
}

// Helper to create a file with content
function createFile(filePath, content, overwrite = false) {
    const fullPath = path.join(rootDir, filePath);
    if (!fs.existsSync(fullPath) || overwrite) {
        fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
    }
}

// Helper to create a page and component pair
function createRoute(basePath, componentName, title, description, overwritePage = false) {
    const dir = `frontend/src/app${basePath ? '/' + basePath : ''}`;
    createDir(dir);
    
    const pageContent = `
import ${componentName} from './${componentName}';

export default function Page() {
  return <${componentName} />;
}
`;

    const componentContent = `
export default function ${componentName}() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">${title}</h1>
      <p className="text-gray-600">${description}</p>
    </div>
  );
}
`;

    createFile(`${dir}/page.tsx`, pageContent, overwritePage);
    createFile(`${dir}/${componentName}.tsx`, componentContent);
}

// Helper to create layout
function createLayout(basePath, layoutName, title) {
    const dir = `frontend/src/app/${basePath}`;
    createDir(dir);
    
    const layoutContent = `
import ${layoutName} from './${layoutName}';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <${layoutName}>{children}</${layoutName}>;
}
`;

    const componentContent = `
export default function ${layoutName}({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">${title}</h1>
      </header>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}
`;

    createFile(`${dir}/layout.tsx`, layoutContent);
    createFile(`${dir}/${layoutName}.tsx`, componentContent);
}

// --- FRONTEND ROUTES ---
createRoute('', 'Home', 'Kisan Nexus Home', 'Welcome to Kisan Nexus.', true);
createRoute('login', 'Login', 'Login', 'Please login to continue.');

// Farmer
createLayout('farmer', 'FarmerLayout', 'Farmer Portal');
createRoute('farmer/dashboard', 'FarmerDashboard', 'Farmer Dashboard', 'Overview of your farming activities.');
createRoute('farmer/supply', 'FarmerSupply', 'My Supply', 'Manage your agricultural supply.');
createRoute('farmer/supply/add', 'AddFarmerSupply', 'Add Supply', 'List new produce for sale.');
createRoute('farmer/matches', 'FarmerMatches', 'Matches', 'See potential buyers for your supply.');
createRoute('farmer/orders', 'FarmerOrders', 'Orders', 'Track your sales and orders.');
createRoute('farmer/profile', 'FarmerProfile', 'Profile', 'Manage your farmer profile.');

// FPO
createLayout('fpo', 'FpoLayout', 'FPO Portal');
createRoute('fpo/dashboard', 'FpoDashboard', 'FPO Dashboard', 'Overview of FPO activities.');
createRoute('fpo/farmers', 'FpoFarmers', 'Farmers', 'Manage farmers in your FPO.');
createRoute('fpo/aggregation', 'FpoAggregation', 'Aggregation', 'Manage aggregated supply.');
createRoute('fpo/marketplace', 'FpoMarketplace', 'Marketplace', 'View and participate in the marketplace.');
createRoute('fpo/orders', 'FpoOrders', 'Orders', 'Track FPO orders.');
createRoute('fpo/logistics', 'FpoLogistics', 'Logistics', 'Manage transportation and logistics.');
createRoute('fpo/forecasting', 'FpoForecasting', 'Forecasting', 'Yield and demand forecasting.');
createRoute('fpo/profile', 'FpoProfile', 'Profile', 'Manage FPO profile.');

// Buyer
createLayout('buyer', 'BuyerLayout', 'Buyer Portal');
createRoute('buyer/dashboard', 'BuyerDashboard', 'Buyer Dashboard', 'Overview of your purchasing activities.');
createRoute('buyer/marketplace', 'BuyerMarketplace', 'Marketplace', 'Browse available produce.');
createRoute('buyer/requirements', 'BuyerRequirements', 'Requirements', 'Manage your procurement requirements.');
createRoute('buyer/requirements/create', 'CreateBuyerRequirement', 'Create Requirement', 'Post a new requirement.');
createRoute('buyer/orders', 'BuyerOrders', 'Orders', 'Track your purchases.');
createRoute('buyer/profile', 'BuyerProfile', 'Profile', 'Manage your buyer profile.');

// Admin
createLayout('admin', 'AdminLayout', 'Admin Portal');
createRoute('admin/dashboard', 'AdminDashboard', 'Admin Dashboard', 'System overview.');
createRoute('admin/users', 'AdminUsers', 'Users', 'Manage platform users.');
createRoute('admin/listings', 'AdminListings', 'Listings', 'Monitor all marketplace listings.');
createRoute('admin/orders', 'AdminOrders', 'Orders', 'Monitor all platform orders.');
createRoute('admin/impact', 'AdminImpact', 'Impact metrics', 'Track platform impact and analytics.');
createRoute('admin/profile', 'AdminProfile', 'Profile', 'Admin settings.');

// --- FRONTEND SHARED FOLDERS ---
const frontendFolders = [
    'frontend/src/components/ui',
    'frontend/src/components/navigation',
    'frontend/src/components/forms',
    'frontend/src/components/marketplace',
    'frontend/src/components/orders',
    'frontend/src/components/charts',
    'frontend/src/components/common',
    'frontend/src/features/authentication',
    'frontend/src/features/farmer',
    'frontend/src/features/fpo',
    'frontend/src/features/buyer',
    'frontend/src/features/marketplace',
    'frontend/src/features/matching',
    'frontend/src/features/orders',
    'frontend/src/features/forecasting',
    'frontend/src/features/logistics',
    'frontend/src/features/impact',
    'frontend/src/hooks',
    'frontend/src/lib/api',
    'frontend/src/lib/auth',
    'frontend/src/lib/constants',
    'frontend/src/lib/utils',
    'frontend/src/types',
];
frontendFolders.forEach(createDir);

// --- BACKEND PACKAGES ---
const backendPackages = [
    'backend/src/main/java/com/kisannexus/security',
    'backend/src/main/java/com/kisannexus/authentication',
    'backend/src/main/java/com/kisannexus/users',
    'backend/src/main/java/com/kisannexus/farmers',
    'backend/src/main/java/com/kisannexus/fpos',
    'backend/src/main/java/com/kisannexus/buyers',
    'backend/src/main/java/com/kisannexus/supply',
    'backend/src/main/java/com/kisannexus/requirements',
    'backend/src/main/java/com/kisannexus/marketplace',
    'backend/src/main/java/com/kisannexus/matching',
    'backend/src/main/java/com/kisannexus/aggregation',
    'backend/src/main/java/com/kisannexus/orders',
    'backend/src/main/java/com/kisannexus/forecasting',
    'backend/src/main/java/com/kisannexus/logistics',
    'backend/src/main/java/com/kisannexus/impact',
    'backend/src/main/java/com/kisannexus/common',
];
backendPackages.forEach(createDir);

// --- AI SERVICE ---
const aiFolders = [
    'ai_service/app',
    'ai_service/models',
    'ai_service/data',
    'ai_service/tests',
];
aiFolders.forEach(createDir);
createFile('ai_service/README.md', '# AI Service\n\nAI components for Kisan Nexus.');
createFile('ai_service/requirements.txt', '# Add Python dependencies here\n');

// --- DATABASE ---
const dbFolders = [
    'database/migrations',
    'database/seed',
];
dbFolders.forEach(createDir);
createFile('database/README.md', '# Database\n\nDatabase schemas, migrations, and seed data.');

// --- DOCUMENTATION ---
createDir('docs');
createFile('docs/architecture.md', '# Architecture\n\nSystem architecture overview.');
createFile('docs/api.md', '# API Documentation\n\nAPI references.');
createFile('docs/database.md', '# Database Schema\n\nDatabase design.');
createFile('docs/mvp-scope.md', '# MVP Scope\n\nMinimum Viable Product definitions.');

console.log('Project structure scaffolding completed.');
