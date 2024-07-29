import type { IconProps } from './types';

export function DuplicateLine({ size = 18, className, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.89893 14.0033H13.1011C13.7187 14.0033 14.2275 14.0033 14.6417 13.9695C15.0716 13.9343 15.4653 13.8591 15.8347 13.6709C16.4086 13.3785 16.8752 12.9119 17.1676 12.338C17.3558 11.9686 17.4311 11.5749 17.4662 11.145C17.5 10.7308 17.5 10.222 17.5 9.60433L17.5 6.39802C17.5 5.78035 17.5001 5.27157 17.4662 4.85733C17.4311 4.42741 17.3558 4.03371 17.1676 3.66436C16.8752 3.09046 16.4086 2.62387 15.8347 2.33146C15.4654 2.14326 15.0717 2.06798 14.6417 2.03285C14.2275 1.99901 13.7188 1.99901 13.1011 1.99902H9.89891C9.28127 1.99901 8.77252 1.99901 8.35829 2.03285C7.92838 2.06797 7.53468 2.14326 7.16533 2.33145C6.59143 2.62387 6.12484 3.09046 5.83243 3.66435C5.64424 4.0337 5.56895 4.4274 5.53383 4.85731C5.49998 5.27154 5.49999 5.7803 5.5 6.39795V9.60436C5.49999 10.222 5.49998 10.7308 5.53383 11.145C5.56895 11.5749 5.64424 11.9686 5.83243 12.338C6.12484 12.9119 6.59143 13.3785 7.16533 13.6709C7.53468 13.8591 7.92838 13.9343 8.35829 13.9695C8.77252 14.0033 9.28128 14.0033 9.89893 14.0033ZM8.48044 12.4745C8.14329 12.4469 7.96896 12.3968 7.84632 12.3344C7.55466 12.1858 7.31754 11.9486 7.16894 11.657C7.10645 11.5343 7.05639 11.36 7.02885 11.0229C7.00058 10.677 7 10.2297 7 9.57329V6.42902C7 5.77259 7.00058 5.32537 7.02885 4.97946C7.05639 4.64231 7.10645 4.46799 7.16894 4.34534C7.31754 4.05369 7.55466 3.81657 7.84632 3.66796C7.96896 3.60547 8.14329 3.55541 8.48044 3.52787C8.82634 3.49961 9.27357 3.49902 9.93 3.49902H13.07C13.7265 3.49902 14.1737 3.49961 14.5196 3.52787C14.8567 3.55541 15.0311 3.60547 15.1537 3.66796C15.4454 3.81657 15.6825 4.05369 15.8311 4.34534C15.8936 4.46799 15.9436 4.64232 15.9712 4.97947C15.9994 5.32537 16 5.7726 16 6.42904L16 9.57331C16 10.2297 15.9994 10.677 15.9712 11.0229C15.9436 11.36 15.8936 11.5343 15.8311 11.657C15.6825 11.9486 15.4453 12.1858 15.1537 12.3344C15.031 12.3968 14.8567 12.4469 14.5196 12.4745C14.1737 12.5027 13.7264 12.5033 13.07 12.5033H9.93C9.27356 12.5033 8.82634 12.5027 8.48044 12.4745Z"
        fill={color ? color : 'currentColor'}
      />
      <path
        d="M10.5 15.5036C8.63244 15.5036 7.86165 15.4957 7.25345 15.3149C5.77965 14.8768 4.62681 13.7239 4.18867 12.2501C4.00786 11.6419 4.00003 10.8712 4.00003 9.00358L4 7.00259C3.17157 7.00259 2.5 7.67417 2.5 8.50259L2.50001 9.15446C2.4998 10.8243 2.49966 11.8326 2.75086 12.6776C3.33345 14.6373 4.86634 16.1701 6.82601 16.7527C7.67099 17.0039 8.67926 17.0038 10.3491 17.0036L11.5039 17.0036C12.3323 17.0036 13.0039 16.332 13.0039 15.5036L10.5 15.5036Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
}