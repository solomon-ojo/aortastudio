export default function IndustriesSection() {
  const industries = [
    { name: "Fintech", icon: "M22.5 0H30.0003V30H22.5V0ZM0 10.5588H15.0006V29.9999H0V10.5588Z" },
    {
      name: "Healthcare",
      icon: "M11.25 0H18.7503V11.2504H11.2594V18.7496H18.75V11.2505H30.0094V18.7507H18.7503V30.0001H11.25V18.7496H0V11.2494H11.25V0Z",
    },
    {
      name: "Manufacturing",
      icon: "M11.25 0H22.5004V11.2504H11.25V0ZM11.2504 18.7496H0V30.0001H11.2504V18.7496ZM33.7504 18.7496H22.5V30.0001H33.7504V18.7496Z",
    },
    {
      name: "Technology",
      icon: "M9.45605 9.74443C8.45172 10.6789 7.10521 11.2504 5.62521 11.2504C2.51849 11.2504 0 8.73193 0 5.62521C0 2.51849 2.51849 0 5.62521 0C8.73193 0 11.2504 2.51849 11.2504 5.62521C11.2504 7.10521 10.6789 8.45172 9.74443 9.45605H20.2556C19.3211 8.45172 18.7496 7.10521 18.7496 5.62521C18.7496 2.51849 21.2681 0 24.3748 0C27.4815 0 30 2.51849 30 5.62521C30 8.73193 27.4815 11.2504 24.3748 11.2504C22.8948 11.2504 21.5483 10.6789 20.544 9.74443V20.2556C21.5483 19.3211 22.8948 18.7496 24.3748 18.7496C27.4815 18.7496 30 21.2681 30 24.3748C30 27.4815 27.4815 30 24.3748 30C21.2681 30 18.7496 27.4815 18.7496 24.3748C18.7496 22.8948 19.3211 21.5483 20.2556 20.544H9.74443C10.6789 21.5483 11.2504 22.8948 11.2504 24.3748C11.2504 27.4815 8.73193 30 5.62521 30C2.51849 30 0 27.4815 0 24.3748C0 21.2681 2.51849 18.7496 5.62521 18.7496C7.10521 18.7496 8.45172 19.3211 9.45605 20.2556V9.74443Z",
    },
    {
      name: "eCommerce",
      icon: "M0 0H9.74618V4.26722H0V0ZM9.74618 4.26722L38.8764 4.26721L34.7657 17.2177H9.74609L9.74618 4.26722ZM34.7184 25.1086C34.7184 27.8111 32.5276 30.002 29.825 30.002C27.1225 30.002 24.9316 27.8111 24.9316 25.1086C24.9316 22.4061 27.1225 20.2152 29.825 20.2152C32.5276 20.2152 34.7184 22.4061 34.7184 25.1086ZM14.6403 25.1086C14.6403 27.8111 12.4494 30.002 9.7469 30.002C7.04436 30.002 4.85352 27.8111 4.85352 25.1086C4.85352 22.4061 7.04436 20.2152 9.7469 20.2152C12.4494 20.2152 14.6403 22.4061 14.6403 25.1086Z",
    },
    {
      name: "Automotive",
      icon: "M44.1753 15.6816L31.7743 0H16.8422C12.5124 0 9 3.50962 9 7.84219C9 12.1719 12.5096 15.6844 16.8422 15.6844H44.1782L44.1753 15.6816ZM14.3213 22.8421C14.3213 26.7969 11.1153 30.0028 7.16063 30.0028C3.20592 30.0028 0 26.7969 0 22.8421C0 18.8874 3.20592 15.6815 7.16063 15.6815C11.1153 15.6815 14.3213 18.8874 14.3213 22.8421ZM58.7861 22.8421C58.7861 26.7969 55.5802 30.0028 51.6255 30.0028C47.6708 30.0028 44.4649 26.7969 44.4648 22.8422H44.1738V15.7268H50.8156C51.0815 15.6969 51.3517 15.6815 51.6255 15.6815C55.5802 15.6815 58.7861 18.8874 58.7861 22.8421Z",
      isNew: true,
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-sm text-gray-600 uppercase tracking-wider">Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black">
            The wide spectrum of industries we serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-lg p-6 h-32 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors relative">
                {industry.isNew && (
                  <div className="absolute top-2 right-2 bg-yellow-300 text-black text-xs px-2 py-1 rounded">NEW</div>
                )}
                <div className="w-8 h-8 mb-3">
                  <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={industry.icon} fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-black text-center">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
