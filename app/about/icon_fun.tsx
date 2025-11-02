'use client'
import React from 'react'

interface IconProps {
  className?: string
  onClick?: () => void
}

// 邮件图标组件
export const MailIcon: React.FC<IconProps> = ({ className = '', onClick }) => {
  return (
    <svg
      className={`h-8 w-8 cursor-pointer text-gray-700 transition-colors hover:text-blue-600 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

// GitHub 图标组件
export const GithubIcon: React.FC<IconProps> = ({ className = '', onClick }) => {
  return (
    <svg
      className={`h-8 w-8 cursor-pointer text-gray-700 transition-colors hover:text-gray-900 ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 012.578-.337c.84.03 1.724.117 2.578.337 1.91-.896 2.75-1.026 2.75-1.026.545 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.841-2.339 4.695-4.566 4.943.359.31.678.921.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.574.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// Steam 图标组件
interface SvgIconProps extends IconProps {
  src: string
  alt: string
  hoverColor?: string
}

export const SteamIcon: React.FC<SvgIconProps> = ({
  src,
  alt,
  className = '',
  hoverColor = 'text-gray-800',
  onClick,
}) => {
  return (
    <object
      className={`h-8 w-8 text-gray-700 hover:${hoverColor} cursor-pointer transition-colors ${className}`}
      type="image/svg+xml"
      data={src}
      onClick={onClick}
    >
      <img className="h-8 w-8" src={src} alt={alt} />
    </object>
  )
}

// 微信图标组件
export const WechatIcon: React.FC<SvgIconProps> = ({
  src,
  alt,
  className = '',
  hoverColor = 'text-green-500',
  onClick,
}) => {
  return (
    <object
      className={`h-8 w-8 text-gray-700 hover:${hoverColor} cursor-pointer transition-colors ${className}`}
      type="image/svg+xml"
      data={src}
      onClick={onClick}
    >
      <img className="h-8 w-8" src={src} alt={alt} />
    </object>
  )
}

// Hearthstone 图标组件
export const HearthstoneIcon: React.FC<SvgIconProps> = ({
  src,
  alt,
  className = '',
  hoverColor = 'text-yellow-600',
  onClick,
}) => {
  return (
    <object
      className={`h-8 w-8 text-gray-700 hover:${hoverColor} cursor-pointer transition-colors ${className}`}
      type="image/svg+xml"
      data={src}
      onClick={onClick}
    >
      <img className="h-8 w-8" src={src} alt={alt} />
    </object>
  )
}

// 图标集合组件（可选）
interface IconGroupProps {
  className?: string
  onIconClick?: (iconName: string) => void
}

export const IconGroup: React.FC<IconGroupProps> = ({ className = '', onIconClick }) => {
  const hearthStone = '/static/images/hearthstone.svg'
  const steam = '/static/images/steam.svg'

  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      <MailIcon onClick={() => onIconClick?.('mail')} />
      <GithubIcon onClick={() => onIconClick?.('github')} />
      <SteamIcon src={steam} alt="Steam图标" onClick={() => onIconClick?.('steam')} />
      <WechatIcon
        src="/static/favicons/wechat.svg"
        alt="微信图标"
        onClick={() => onIconClick?.('wechat')}
      />
      <HearthstoneIcon
        src={hearthStone}
        alt="Hearthstone图标"
        onClick={() => onIconClick?.('hearthstone')}
      />
    </div>
  )
}

export default IconGroup

{
  /* 邮件图标 */
}
{
  /* <svg
              className="w-8 h-8 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg> */
}

{
  /* GitHub 图标 */
}
{
  /* <svg
              className="w-8 h-8 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 012.578-.337c.84.03 1.724.117 2.578.337 1.91-.896 2.75-1.026 2.75-1.026.545 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.841-2.339 4.695-4.566 4.943.359.31.678.921.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.574.688.481A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
              />
            </svg> */
}

{
  /* Steam 图标 */
}
{
  /* <object
              className="w-8 h-8 text-gray-700 hover:text-gray-800 transition-colors cursor-pointer"
              type="image/svg+xml"
              data={steam}
            >
              <img
                className="w-8 h-8"
                src={steam}
                alt="Steam图标"
              />
            </object> */
}

{
  /* 微信图标 */
}
{
  /* <object
              className="w-8 h-8 text-gray-700 hover:text-green-500 transition-colors cursor-pointer"
              type="image/svg+xml"
              data="/static/favicons/wechat.svg"
            >
              <img
                className="w-8 h-8"
                src="/static/favicons/wechat.svg"
                alt="微信图标"
              />
            </object> */
}

{
  /* Hearthstone 图标 */
}
{
  /* <object
              className="w-8 h-8 text-gray-700 hover:text-yellow-600 transition-colors cursor-pointer"
              type="image/svg+xml"
              data={hearthStone}
            >
              <img
                className="w-8 h-8"
                src={hearthStone}
                alt="Hearthstone图标"
              />
            </object> */
}
