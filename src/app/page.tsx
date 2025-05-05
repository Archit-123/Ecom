import Homes from "../app/home/page";

export default function Home() {
  return (
    <div>
      <Homes></Homes>
    </div>
  );
}
export const generateMetadata = () => {
  return {
    title: "Shoplivo Ecom",
    description:
      "Shoplivo – Affordable Online Shopping for Electronics, Fashion, Home & More ",
    keywords: [
      "ecommerce",
      "products",
      "online store",
      "Shoplivo",
      "login",
      "next",
      "admin",
      "ecom",
      "product",
      "e-com",
    ],
    openGraph: {
      title: "Shoplivo Ecommerce Website",
      description:
        "Shoplivo is your all-in-one online store offering the best deals on electronics, clothing, home essentials, beauty products, and more. Fast shipping, secure checkout, and unbeatable prices.",
      url: "https://ecom-beige-eta.vercel.app/",
      siteName: "Shoplivo",
      images: [
        {
          url: "https://res.cloudinary.com/dyzkfms7o/image/upload/v1746418055/gkehtyszkij3taa6kbqk.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};
