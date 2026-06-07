import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Admin Home Page");
  } catch (err) {
    console.log("Error, Admin goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Admin Login Page");
  } catch (err) {
    console.log("Error, Admin login page:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Admin Signup Page");
  } catch (err) {
    console.log("Error, Admin singup page:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    res.send("post: admin login process");
  } catch (err) {
    console.log("admin login process:", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    res.send("post: signup page");
  } catch (err) {
    console.log("post: signup page:", err);
  }
};

export default restaurantController;
