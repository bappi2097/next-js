import { NextPage } from "next";
import { useRouter } from "next/router";
interface NewsDetailsProps {

}

const NewsDetails: NextPage<NewsDetailsProps> = () => {
    const router = useRouter();
    return (<div>Details page : {router.query.slug}</div>);
}

export default NewsDetails;