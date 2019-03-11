const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const ncp = require('ncp');
const util = require('util');

const rimrafAsync = util.promisify(rimraf);
const mkdirpAsync = util.promisify(mkdirp);
const ncpAsync = util.promisify(ncp);

const buildPath = './build';

const copyBuildFilesAsync = async (src, dest) => {
  try {
    console.log(`Creating directory: ${dest}`);
    await mkdirpAsync(dest);
    
    console.log(`Copying files: ${src} -> ${dest}`);
    await ncpAsync(src, dest);
  } catch (err) {
    throw err;
  }
};

// clean and build
console.log(`Cleaning build path: ${buildPath}`);
(build = async () => {
  try {
    await rimrafAsync(buildPath);

    // server files
    const serverSrc = 'packages/server/build';
    const serverDest = `${buildPath}`;
    console.log(`Building server files`);
    await copyBuildFilesAsync(serverSrc, serverDest);

    // client files
    const clientSrc = 'packages/app/build';
    const clientDest = `${buildPath}/app/build`;
    console.log(`Building client files`);
    await copyBuildFilesAsync(clientSrc, clientDest);

    console.log('Build completed successfully.');
  } catch (err) {
    console.log('Build failed.');
    if (err) return console.error(err);
  }
})();
