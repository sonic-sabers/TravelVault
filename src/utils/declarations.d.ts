declare module "*.svg" {
	import React from 'react';
	import { SvgProps } from "react-native-svg";
	const content: React.FC<SvgProps>;
	export default content;
  }

  declare module 'react-native-config' {
	export const ENV: string;
	// export const API_BASE_URL: string;
	// export const SENTRY_DSN: string;
	// export const GOOGLE_SIGNIN_CLIENT_ID: string;
	// export const MIX_PANEL_TOKEN: string;
	// export const UXCAM_TOKEN: string;
	// export const DUMMY_PROFILE_URL: string;
  }