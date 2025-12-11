/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Preferred Editor - Select the editor to open projects with */
	"programName"?: "cursor" | "positron" | "code" | "codium" | "other";

	/** Custom Editor Command - The command to run when 'Other' is selected (e.g., vim, emacs, nano, or any editor command) */
	"customEditorCommand": string;

	/** Run Custom Editor in Terminal - When enabled, the custom editor command will be run inside a terminal. Useful for terminal-based editors like vim, emacs, or nano. */
	"runCustomEditorInTerminal": boolean;

	/** Base Directory Path - The base directory where folders will be created. Leave empty to use home directory. Supports ~ for home, relative paths, or absolute paths like / or /projects */
	"basePath": string;

	/** Add Year to Path - When enabled, creates folders in YEAR/MM-DD/TITLE structure. When disabled, uses MM-DD/TITLE or just TITLE structure. */
	"addYearToPath": boolean;

	/** Add Month-Day to Path - When enabled, creates folders with MM-DD subdirectory. When disabled with year enabled, uses YEAR/TITLE structure. */
	"addMonthDayToPath": boolean;

	/** Path Name Case Conversion - Choose how to format the folder name. 'none' uses the title as-is, other options convert case and remove special characters. */
	"pathNameCase"?: "none" | "camelCase" | "kebab-case" | "lowercase" | "snake_case";

	/** Truncate Path Name - When enabled, limits the title to 50 characters or 10 words. When disabled, uses the full title. */
	"truncatePathName": boolean;

	/** Open Existing Folders - When enabled, opens existing folders instead of showing an error. When disabled, shows an error if the folder already exists. */
	"openExistingFolder": boolean;

	/** Open Specific File - When enabled, opens a specific file within the newly created folder instead of just the folder. */
	"openSpecificFile": boolean;

	/** Specific File Name - The name of the file to open within the folder (e.g., main.py, index.html, README.md) */
	"specificFileName": string;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Code in New Folder */
	export type CodeInNewFolder = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Code in New Folder */
	export type CodeInNewFolder = {
		
	}
}