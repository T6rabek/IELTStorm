export { auth as middleware } from "@/auth";

export const config = {
  matcher: "/:path*",
  runtime: "nodejs",
  unstable_allowDynamic: [
    // allows a single file
    "/lib/db",
    // use a glob to allow anything in the function-bind 3rd party module
    "/node_modules/mongoose/dist/**",
  ],
};
