import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {

    static getInitialProps(context) {    // very important lifecycle hook that prepopulates our page before rendering in to the client's screen!!!!!!!
        console.log(context);               // it waits for our promises to resolve and then prepopulates our props!
        const promise = new Promise((resolse, reject) => {
            setTimeout(() => {
                resolse({appName: "super man Phil app"});
            }, 1000);
        });
        return promise;
    }

  render() {
    return (
      <div>
        <h1>The main Page {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to Auth as well</button>
      </div>
    );
  }
}
export default IndexPage;

//next has it's own link component as well, has to be wrapped in <a>

// the main idea behind next.js is file and folder structure that lets us navigate and avoid using routes at all,
// it does it for us!!!!
// here we have 2 pages with indes.js file in each and if we type /auth - it shows us the index.js inside our auth folder right away!
// deleted second branch in github, checking on the results and functionality!!!!!!!!!!!!!
