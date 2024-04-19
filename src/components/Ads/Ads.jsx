import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Ads = () => {
  const [Image, setImage] = useState(null);
  const [adsTitle, setAdsTitle] = useState(null);
  const [adsDesc, setAdsDesc] = useState(null);
  const [adsButton, setAdsButton] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setImage(
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
      );
      setAdsTitle("UI/UX Review Check");
      setAdsDesc(
        'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
      );
      setAdsButton(true);
    }, 2000);
  }, []);

  return (
    <section className="hidden md:block md:sticky md:top-10">
      <Card className="mt-6 bg-postsColor xl:w-full 2xl:w-[85%]">
        {Image ? (
          <CardHeader color="gray" className="relative">
            <img src={Image} alt="card-image" />
          </CardHeader>
        ) : (
          <CardHeader className="relative grid min-h-64 place-items-center bg-shapesColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
        )}

        <CardBody>
          {adsTitle ? (
            <Typography variant="h5" className="mb-2 text-textColor">
              {adsTitle}
            </Typography>
          ) : (
            <Typography
              as="div"
              variant="h1"
              className="mb-4 h-3 w-56 rounded-full bg-shapesColor"
            >
              &nbsp;
            </Typography>
          )}

          <Typography className="text-textColor">
            {adsDesc ? (
              <Typography className="mb-2 text-textColor">{adsDesc}</Typography>
            ) : (
              <>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-shapesColor"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-shapesColor"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-2 w-72 rounded-full bg-shapesColor"
                >
                  &nbsp;
                </Typography>
              </>
            )}
          </Typography>
        </CardBody>
        {adsButton ? (
          <CardFooter className="pt-0 ">
            <Button className="bg-mainColor text-blackColor">Read More</Button>
          </CardFooter>
        ) : (
          <CardFooter className="pt-0">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-mainColor shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        )}
      </Card>
    </section>
  );
};

export default Ads;
