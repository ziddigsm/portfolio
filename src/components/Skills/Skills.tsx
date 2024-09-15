import html from "../../assets/html-5.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/javascript.svg";
import ts from "../../assets/file-type-typescript-official.svg";
import cs from "../../assets/csharp.png";
import net from "../../assets/Microsoft_.NET_logo.svg";
import node from "../../assets/node-js.svg";
import exp from "../../assets/express-original.svg";
import azure from "../../assets/azure-icon.svg";
import aws from "../../assets/aws.svg";
import kubernetes from "../../assets/kubernetes.svg";
import devops from "../../assets/azure-devops-color.svg";
import sql from "../../assets/sql-database-generic.svg";
import sonarqube from "../../assets/sonarqube.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux-original.svg";
import mysql from "../../assets/mysql-original-wordmark.svg";
import json from "../../assets/file-json-o.svg";
import xml from "../../assets/xml.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import vs from "../../assets/visual-studio.svg";
import postman from "../../assets/postman.svg";
import python from "../../assets/python.svg";
import bi from "../../assets/powerbi.svg"
import adf from "../../assets/adf.png";
import synapse from "../../assets/synapse.png";
import gql from "../../assets/GraphQL_Logo.png";
import nosql from "../../assets/nosql.png";
import pql from "../../assets/Postgresql_elephant.png";
import cosmos from "../../assets/cosmos.png";
import figma from "../../assets/figma.png";
import jest from "../../assets/jest.png";
import mocha from "../../assets/mocha-logo.svg";
import nunit from "../../assets/nunit.png";
import sinon from "../../assets/sinon.png";
import ssms from "../../assets/ssms.png";
import ssis from "../../assets/SSIS.png";
import soapui from "../../assets/soapui.png";
import az900 from "../../assets/az900.png";

import "./Skills.css";


export function Skills() {
  const skillSet = [
    {
      title: "Frontend",
      skills: [
        {
          skill: "HTML",
          image: html,
        },
        {
          skill: "CSS",
          image: css,
        },
        {
          skill: "React",
          image: react,
        },
        {
          skill: "Redux",
          image: redux,
        },
        {
          skill: "JavaScript",
          image: js,
        },
        {
          skill: "TypeScript",
          image: ts,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          skill: "C#",
          image: cs,
        },
        {
          skill: ".NET",
          image: net,
        },
        {
          skill: ".NET MVC",
          image: net,
        },
        {
          skill: "Node.js",
          image: node,
        },
        {
          skill: "Express.js",
          image: exp,
        },
        {
          skill: "Python",
          image: python,
        },
      ],
    },
    {
      title: "Cloud Services",
      skills: [
        {
          skill: "Microsoft Azure",
          image: azure,
        },
        {
          skill: "Amazon Web Services",
          image: aws,
        },
      ],
    },
    {
      title: "DevOps and Continuous Integration - Continous Deployment",
      skills: [
        {
          skill: "Azure DevOps",
          image: devops,
        },
        {
          skill: "Kubernetes",
          image: kubernetes,
        },
      ],
    },
    {
      title: "Tools, Applications and Version Control",
      skills: [
        {
          skill: "SSMS",
          image: ssms,
        },
        {
          skill: "Visual Studio",
          image: vs,
        },
        {
          skill: "VS Code",
          image: vs,
        },
        {
          skill: "Postman",
          image: postman,
        },
        {
          skill: "Figma",
          image: figma,
        },
        {
          skill: "SOAP UI",
          image: soapui,
        },
        {
          skill: "SonarQube",
          image: sonarqube,
        },
        {
          skill: "SSIS",
          image: ssis,
        },
        {
          skill: "Git",
          image: git,
        },
        {
          skill: "GitHub",
          image: github,
        },
        {
          skill: "PowerBI",
          image: bi,
        },
      ],
    },
    {
      title: "Data",
      skills: [
        {
          skill: "SQL",
          image: sql,
        },
        {
          skill: "MySQL",
          image: mysql,
        },
        {
          skill: "NoSQL",
          image: nosql,
        },
        {
          skill: "PostgreSQL",
          image: pql,
        },
        {
          skill: "GraphQL",
          image: gql,
        },
        {
          skill: "Azure Data Factory",
          image: adf,
        },
        {
          skill: "Azure Synapse Analytics",
          image: synapse,
        },
        {
          skill: "JSON",
          image: json,
        },
        {
          skill: "XML",
          image: xml,
        },
        {
          skill: "Azure Cosmos DB",
          image: cosmos,
        },
      ],
    },
    {
      title: "Testing",
      skills: [
        {
          skill: "Mocha-chai",
          image: mocha,
        },
        {
          skill: "NUnit",
          image: nunit,
        },
        {
          skill: "Jest",
          image: jest,
        },
        {
          skill: "Sinon",
          image: sinon,
        },
      ],
    },
    {
        title: "Certifications",
        skills: [
          {
            skill: "Microsoft Azure Fundamentals",
            image: az900,
          }
        ],
      },
  ];
  return <div className="skillSet">
    <h1>Skills and Certifications</h1>
    {skillSet.map((skills, index)=>{
        return (
            <div className="skills-total">
                <h3 className="skills-title">{skills.title}</h3>
                <div className="skill-by-category">{skills.skills.map((skill, id)=>{
                    return (
                        <div className="skill">
                            <img src={skill.image} alt="img" />
                            <h5>{skill.skill}</h5>
                        </div>
                    )
                })}</div>
            </div>
            
        )
    })}
  </div>;
}
