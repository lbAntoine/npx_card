#!/usr/bin/env node

'use strict'

import boxen from 'boxen';
import open from 'open';
import chalk from 'chalk';
import clear from 'clear';
import inquirer from 'inquirer';
// const fs = require('fs');
// const request = require('request');
// const path = require('path');
// const ora = require('ora');
// const cliSpinners = require('cli-spinners');

clear();

const prompt = inquirer.createPromptModule();

const questions = [{
  type: "list",
  name: "action",
  message: "What would you like to do?",
  choices: [
    {
      name: `Send me an ${chalk.green.bold("email")}?`,
      value: () => {
        open("mailto:antoine.lebras@gmail.com");
        console.log("\nDone, see you soon.\n");
      }
    },
    // {
    //   name: `Download my ${chalk.magentaBright.bold("resume")}?`,
    //   value: () => {
    //     const loader = ora({
    //       text: 'Downloading resume...',
    //       spinner: cliSpinners.material
    //     }).start();
    //     let pipe = request('http://93.4.7.36:8798/api/resume').pipe(fs.createWriteStream('./lbantoine-resume.html'));
    //     pipe.on("finish", function () {
    //       let downloadPath = path.join(process.cwd(), 'lbantoine-resume.html');
    //       console.log(`\nResume downloaded to ${chalk.yellowBright(downloadPath)} \n`);
    //       open(downloadPath);
    //       loader.stop();
    //     })
    //   }
    // }
    {
      name: "Just quit.",
      value: () => {
        console.log("Good Bye!\n");
      }
    }
  ]
}];

const data = {
  name: chalk.bold.green('             Antoine Le Bras'),
  handle: chalk.white('@lbAntoine'),
  work: `${chalk.white('Junior software developer in')} ${chalk
    .hex('#2b82b2')
    .bold('Aix-en-Provence')}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("tomato_wizard"),
  github: chalk.gray("https://github.com/") + chalk.green("lbAntoine"),
  linkedin: chalk.grey("https://linkedin.com/in/") + chalk.blue("antoine-le-bras"),
  // web: chalk.cyan("https://antoinelb.fr"),
  npx: chalk.red("npx") + " " + chalk.white("lbantoine"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  // labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    // `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    //`${chalk.italic(
    //"I am currently looking for new opportunities,"
    //)}`,
    `${chalk.italic("My inbox is always open. Whether you have")}`,
    `${chalk.italic("a question or just want to say hi, I'll try")}`,
    `${chalk.italic("my best to get back to you!")}`,
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
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action())
