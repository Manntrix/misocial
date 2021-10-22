import Head from "next/head";
import PrivacyBanner_B from "../Components/PrivacyPolicy/PrivacyBanner_B";
import PrivacyPolicyContent from "../Components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "../Layouts/Footer";

export default function PrivacyPolicy_B() {
    return (
        <div className="terms-main-wr">
            <Head>
                <title>Create Next App/sign up next</title>
                <meta name="sign up next" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PrivacyBanner_B />
            <PrivacyPolicyContent />
            <Footer />
        </div>
    )
}