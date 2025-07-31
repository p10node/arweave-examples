/// <reference types="./bun-types.d.ts" />

export const detectDirectRun = (main?: boolean) => {
	if (main) return true;
	return false;
};
