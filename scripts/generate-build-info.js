import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let commit = 'unknown';
try {
	commit = execSync('git rev-parse --short HEAD').toString().trim();
} catch (_) {
	/* not a git repo yet */
}

const content = `// Auto-generated at build time\nexport const BUILD_COMMIT = '${commit}';\n`;
writeFileSync(join(__dirname, '../src/lib/build-info.ts'), content);
