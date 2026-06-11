import { Request, Response } from "express";
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberService from "../models/Member.service";
import Errors from "../libs/Errors";

// REACT

const memberService = new MemberService();
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    const input: MemberInput = req.body;
    const result: Member = await memberService.signup(input);
    // TODO: TOKEN
    res.json({ member: result });
  } catch (err) {
    console.log("router: signup page:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TODO: TOKEN
    res.json({ member: result });
  } catch (err) {
    console.log("router: login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
