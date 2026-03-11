// eslint-disable-next-line @typescript-eslint/no-require-imports
import pkg from 'mssql';
const { connect, close } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '1433'),
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    connectTimeout: 15000
};

console.log('--- Database Connection Diagnostic ---');
console.log(`Connecting to: ${config.server}:${config.port}`);
console.log(`Database: ${config.database}`);
console.log(`User: ${config.user}`);
console.log('--------------------------------------');

async function testConnection() {
    try {
        console.log('Attempting to connect...');
        let pool = await connect(config);
        console.log('SUCCESS: Connected to MSSQL!');
        
        console.log('Running test query: SELECT 1 as result');
        let result = await pool.request().query('SELECT 1 as result');
        console.log('Query Result:', result.recordset[0]);
        
        await close();
        console.log('Connection closed.');
    } catch (err) {
        console.error('ERROR: Connection Failed!');
        console.error('Code:', err.code);
        console.error('Message:', err.message);
        console.error('Detailed Error:', err);
        
        if (err.code === 'ETIMEOUT') {
            console.log('\nDIAGNOSIS: The connection timed out. This usually means:');
            console.log('1. The IP address is wrong.');
            console.log('2. The port (1433) is blocked by a firewall.');
            console.log('3. Your IP is not whitelisted on the server.');
            console.log('4. You need to be on a specific VPN.');
        }
    }
}

testConnection();
