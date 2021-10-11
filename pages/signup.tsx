import React from "react"
import Head from "next/head"
import { Tab } from "@headlessui/react"
import classNames from "classnames"
import { SignInForm, SignUpForm } from "../components/account"

const AccountAccessSignInTab = () => (
  <Tab>
    {({ selected }) => (
      <div
        className={classNames([
          "py-2 px-4 text-center",
          selected ? "bg-neutrals-black " : "bg-secondary-black",
        ])}
      >
        <button className="px-4 py-2">Sign In</button>
      </div>
    )}
  </Tab>
)

const AccountAccessSignUpTab = () => (
  <Tab>
    {({ selected }) => (
      <div
        className={classNames([
          "py-2 px-4 text-center",
          selected ? "bg-neutrals-black " : "bg-secondary-black",
        ])}
      >
        <button className="px-4 py-2">Sign Up</button>
      </div>
    )}
  </Tab>
)

const SignupPage = () => (
  <>
    <Head>
      <title>Sign up</title>
    </Head>
    <div className="min-h-screen bg-neutrals-black flex">
      {/* Decorative */}
      <div className="hidden lg:block relative flex-auto flex space-x-4">
        <img
          className="absolute inset-0 h-full w-full max-w-xl 2xl:max-w-2xl object-cover"
          // src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          src="/hero-pattern.svg"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center space-x-4">
            <img
              className="h-12 w-auto"
              src="/text-touch-logo.svg"
              alt="Texttouch"
            />
            <h1 className="font-display text-4xl font-black">Textouch</h1>
          </div>
        </div>
        <Tab.Group>
          <div className="mt-20 max-w-lg">
            <Tab.List>
              <div className="bg-secondary-black p-2 grid grid-cols-2 items-center rounded-sm text-lg">
                <AccountAccessSignInTab />
                <AccountAccessSignUpTab />
              </div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <SignInForm />
              </Tab.Panel>
              <Tab.Panel>
                <SignUpForm />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  </>
)
export default SignupPage
