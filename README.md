
## 👉 Get Started
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Run the development server
```
npm run dev
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Next.js](https://nextjs.org)
- UI Kit - [Tailwind](https://tailwindcss.com)
- Authentication - [Firebase Auth](https://firebase.google.com/products/auth)
- Database - [Cloud Firestore](https://firebase.google.com/products/firestore)
- Payments - [Stripe](https://stripe.com)
- Newsletter - [ConvertKit](https://convertkit.com)
- Contact Form - [Formspree](https://formspree.io)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - TBD


## 📚 Guide

<details> <summary><b>Styles</b></summary> <p> Styles are applied within each component using Tailwind classes. You can customize your Tailwind colors, breakpoints, and other high-level values in <code>tailwind.config.js</code> (<a href="https://tailwindcss.com/docs/configuration">docs</a>). You can add new global classes in <code>src/styles/global.css</code> (<a href="https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes">docs</a>). Your template contains Tailwind components designed by <a href="https://tailkit.com">Tailkit</a>. You can find a larger selection of nicely designed components at <a href="https://tailkit.com">tailkit.com</a>. </p> </details>

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses the built-in Next.js router and its convenient <code>useRouter</code> hook. Learn more in the <a target="_blank" href="https://github.com/zeit/next.js/#routing">Next.js docs</a>.

```js
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname);

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link href="/about"><a>About</a></Link>
      <button onClick={(e) => router.push("/about")}>About</button>
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Authentication</b></summary>
<p>
  This project uses <a href="https://firebase.google.com">Firebase Auth</a> and includes a convenient <code>useAuth</code> hook (located in <code><a href="src/util/auth.js">src/util/auth.js</a></code>) that wraps Firebase and gives you common authentication methods. Depending on your needs you may want to edit this file and expose more Firebase functionality.

```js
import { useAuth } from "./../util/auth.js";

function MyComponent() {
  // Get the auth object in any component
  const auth = useAuth();

  // Depending on auth state show signin or signout button
  // auth.user will either be an object, null when loading, or false if signed out
  return (
    <div>
      {auth.user ? (
        <button onClick={(e) => auth.signout()}>Signout</button>
      ) : (
        <button onClick={(e) => auth.signin("hello@divjoy.com", "yolo")}>Signin</button>
      )}
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Database</b></summary>
<p>
  This project uses <a href="https://firebase.google.com/products/firestore">Cloud Firestore</a> and includes some data fetching hooks to get you started (located in <code><a href="src/util/db.js">src/util/db.js</a></code>). You'll want to edit that file and add any additional query hooks you need for your project.

```js
import { useAuth } from './../util/auth.js';
import { useItemsByOwner } from './../util/db.js';
import ItemsList from './ItemsList.js';

function ItemsPage(){
  const auth = useAuth();

  // Fetch items by owner
  // Returned status value will be "idle" if we're waiting on
  // the uid value or "loading" if the query is executing.
  const uid = auth.user ? auth.user.uid : undefined;
  const { data: items, status } = useItemsByOwner(uid);

  // Once we have items data render ItemsList component
  return (
    <div>
      {(status === "idle" || status === "loading") ? (
        <span>One moment please</span>
      ) : (
        <ItemsList data={items}>
      )}
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Deployment</b></summary>
<p>
This project wasn't setup with a specific web host in mind. Please follow the Next.js <a href="https://nextjs.org/docs/deployment">deployment docs</a> to learn how to deploy your project to various hosts.
</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  This project was created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, the React codebase generator. You can find more info in the <a href="https://docs.divjoy.com">Divjoy Docs</a>.
</p>
</details>
  