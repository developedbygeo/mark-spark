import { readFileSync } from 'fs';
import path from 'path';

const getBuildStyles = () => {
  const cssPath = path.join(__dirname, '..', 'dist-electron', 'output.css');
  try {
    const tailwindStyles = readFileSync(cssPath, 'utf-8');
    return tailwindStyles;
  } catch (error) {
    console.error(`Error reading CSS file: ${(error as Error).message}`);
  }
};

export default getBuildStyles;
