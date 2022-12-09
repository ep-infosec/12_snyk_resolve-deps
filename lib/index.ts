import physicalTree = require('./deps');
import logicalTree = require('./logical');
import walk = require('./walk');
import prune = require('./prune');
import pluck = require('./pluck');
import unique = require('./unique');
import { Options, LogicalRoot } from './types';

function resolveDeps(dir: string, options: Options): Promise<LogicalRoot> {
  return physicalTree(dir, null, options).then((res) => logicalTree(res, options));
}

resolveDeps.physicalTree = physicalTree;
resolveDeps.logicalTree = logicalTree;
resolveDeps.walk = walk;
resolveDeps.prune = prune;
resolveDeps.pluck = pluck;
resolveDeps.unique = unique;

export = resolveDeps;
