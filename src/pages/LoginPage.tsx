import { LoginTabs } from "@/components/LoginTabs";
import loginPicture from "../../public/loginPicture.png";
import { motion } from "framer-motion";

export function LoginPage() {
  return (
    <div>
      <div className="flex justify-center">
        <motion.h1
          className="text-5xl font-bold mb-4 drop-shadow-sm text-blue-600 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Chat A Lot
        </motion.h1>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="flex">
          <div className="col-5">
            <img
              src={loginPicture}
              className="img-fluid image-right h-[500px]"
              alt="imageHere"
            />
          </div>

          <div className="col-7">
            <LoginTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
