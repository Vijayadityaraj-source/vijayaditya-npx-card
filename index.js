#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const data = {
    name: chalk.bold.green("                    Vijayaditya Raj Rapaka"),
    work: `${chalk.white("Computer Science Student at")} ${chalk
        .hex("#2b82b2")
        .bold("NIT Warangal")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("V_A_R_Rap"),
    github: chalk.gray("https://github.com/") +  chalk.green("Vijayadityaraj-source"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("vijayaditya-raj-rapaka-5b2659237"),
    web: chalk.hex('#7862b2')("https://vijayaditya-portfolio.netlify.app"),
    npx: chalk.red("npx") + " " + chalk.white("vijayaditya"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
    labelResume: chalk.white.bold("       Resume:")
};

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:vijayaditya.eng@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Open my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open("https://docs.google.com/document/d/1NNR0Hh6zE3Q5nH_EUO5fpU7D9UFvGGrdFIoksZ7jsT0/edit#heading=h.hhf0fgftbi4o");
                    console.log("Resume opened, See you!\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Viva la Vida.\n");
                }
            }
        ]
    }
];

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "           I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("           my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "           question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "           my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());