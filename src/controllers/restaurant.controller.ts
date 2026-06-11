import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Admin Home Page");
  } catch (err) {
    console.log("Error, Admin goHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Admin Signup Page");
  } catch (err) {
    console.log("Error, Admin singup page:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Admin Login Page");
  } catch (err) {
    console.log("Error, Admin login page:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    // TODO: SISSION AUTH
    res.send(result);
  } catch (err) {
    console.log("post: signup page:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TODO: SESSION AUTH
    res.send(result);
  } catch (err) {
    console.log("admin login process:", err);
    res.send(err);
  }
};

export default restaurantController;
