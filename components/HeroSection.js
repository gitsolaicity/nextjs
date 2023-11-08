import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="relative isolate">
        <div className="mx-auto max-w-2xl py-12 sm:py-8 lg:py-16">
          <div className="sr-only sm:not-sr-only sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Оголошуємо наш наступний раунд кодування.{' '}
              <Link href="#" className="group font-semibold text-gray-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Детальніше <span className="transition inline-block group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Link
                href="#"
                className="transition rounded-md border border-transparent bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#" className="group transition rounded-md border text-indigo-600 px-5 py-2.5 text-sm font-semibold hover:bg-indigo-50 hover:border-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Learn more <span className="transition inline-block group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeroSection;