import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
   images:{
     domains : ['res.cloudinary.com']
   }
};

export default withFlowbiteReact(nextConfig);
