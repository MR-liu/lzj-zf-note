"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var execSync = require('child_process').execSync;
var fs = require('fs-extra');
var path = require('path');
function isInGitRepository() {
    try {
        execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
        return true;
    }
    catch (e) {
        return false;
    }
}
function isInMercurialRepository() {
    try {
        execSync('hg --cwd . root', { stdio: 'ignore' });
        return true;
    }
    catch (e) {
        return false;
    }
}
function tryGitInit() {
    try {
        execSync('git --version', { stdio: 'ignore' });
        if (isInGitRepository() || isInMercurialRepository()) {
            return false;
        }
        execSync('git init', { stdio: 'ignore' });
        return true;
    }
    catch (e) {
        console.warn('Git repo not initialized', e);
        return false;
    }
}
function tryGitCommit(appPath) {
    try {
        execSync('git add -A', { stdio: 'ignore' });
        execSync('git commit -m "Initialize project using Create React App"', {
            stdio: 'ignore',
        });
        return true;
    }
    catch (e) {
        console.warn('Git commit not created', e);
        console.warn('Removing .git directory...');
        try {
            fs.removeSync(path.join(appPath, '.git'));
        }
        catch (removeErr) {
        }
        return false;
    }
}
exports.default = {
    isInGitRepository: isInGitRepository,
    isInMercurialRepository: isInMercurialRepository,
    tryGitCommit: tryGitCommit,
    tryGitInit: tryGitInit,
};
