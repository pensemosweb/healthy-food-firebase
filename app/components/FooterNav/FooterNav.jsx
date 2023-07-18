import { Form } from '@remix-run/react'
import ButtonLink from '../ButtonLink/ButtonLink'

import { GoHomeFill, GoPasskeyFill } from 'react-icons/go'
import { HiPencilAlt } from 'react-icons/hi'
import { TbLogout } from 'react-icons/tb'
import Button from '../Button/Button'

const sizeIcon = 'text-3xl'

const links = [
  {
    to: '/',
    icon: <GoHomeFill className={sizeIcon} />,
  },
  {
    to: '/publish',
    icon: <HiPencilAlt className={sizeIcon} />,
  },
]

export default function FooterNav({ user }) {
  return (
    <div className="mt-16">
      <footer className="w-full items-center flex justify-around fixed bottom-0 p-2 bg-pw-lightgreen text-white">
        {links.map((link) => (
          <ButtonLink
            key={link.to}
            className="border-none p-2"
            to={link.to}
            content={link.icon}
          />
        ))}
        {user ? <Logout /> : <Join />}
      </footer>
    </div>
  )
}

function Logout() {
  return (
    <Form method="post" action="/logout">
      <Button
        type="submit"
        className="bg-transparent border-none hover:bg-transparent">
        <TbLogout className={sizeIcon} />
      </Button>
    </Form>
  )
}

function Join() {
  return (
    <ButtonLink
      className="border-none p-2"
      to="/join"
      content={<GoPasskeyFill className={sizeIcon} />}
    />
  )
}
