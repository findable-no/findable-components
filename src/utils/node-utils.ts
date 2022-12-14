import { isArray, isEmptyArray } from './array';

/**
 * Util for looping through all children to get total count of files
 * @param children - The children nodes
 * @param isFile - The value for knowing if a node is a file or folder
 * @returns Total number of files
 */
export const countFiles = (children: any, isFile?: boolean): number => {
  if (isFile) return 1;
  if (!children) return 0;
  if (!isArray(children) || isEmptyArray(children)) return 0;

  let count = 0;
  for (const child of children) {
    count += countFiles(child.children, child.isFile);
  }
  return count;
};

/**
 * Util for checking if children are folders
 * @param nodes - The children nodes
 * @returns true if unable to find node with isFile = true
 */
export function checkIfFolders(nodes?: any): boolean {
  if (!nodes || !isArray(nodes)) return false;
  return Boolean(nodes?.find((node: any) => !node.isFile));
}

/**
 * Util for getting all file codes in a flattened array
 * @param nodes - The children nodes
 * @returns flat array with all file codes
 */
export const getFiles = (nodes?: any): string[] => {
  if (!nodes || !isArray(nodes) || isEmptyArray(nodes)) return [];

  return nodes.flatMap((node: any) =>
    !node.isFile && node.children ? getFiles(node.children) : node.code
  );
};
