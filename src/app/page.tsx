import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* HERO */}
            <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    AI-Powered Skin Scan Analysis
                </h1>

                <p className="mt-4 text-lg text-gray-600">
                    Upload a skin photo and receive AI-assisted insights for
                    early detection of potential cancerous patterns.
                    <span className="font-semibold">
                        {" "}
                        Not a medical diagnosis.
                    </span>
                </p>

                <div className="mt-8 flex gap-4">
                    <Button size="lg" asChild>
                        <Link href="/scans">Upload Scan</Link>
                    </Button>
                    <Button size="lg" variant="outline">
                        How It Works
                    </Button>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="border-t bg-white px-6 py-16">
                <div className="mx-auto grid max-w-4xl gap-10 text-center sm:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Fast AI Results
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Get analysis in seconds using advanced dermatology
                            models.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            Secure & Private
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Your images are encrypted and never shared with
                            third parties.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            Doctor-Friendly
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Designed to support, not replace, professional
                            medical evaluation.
                        </p>
                    </div>
                </div>
            </section>

            {/* YELLOW DISCLAIMER */}
            <section className="px-6 py-12">
                <div className="mx-auto max-w-3xl rounded-xl border border-yellow-400 bg-yellow-50 p-5">
                    <h3 className="text-lg font-semibold text-yellow-700">
                        ⚠ Health Notice
                    </h3>
                    <p className="mt-2 leading-relaxed text-yellow-700">
                        AI results are informational only and are
                        <span className="font-semibold">
                            {" "}
                            not a medical diagnosis.
                        </span>
                        <br />
                        If you notice unusual skin changes, moles, or feel any
                        concern,
                        <span className="font-bold underline">
                            {" "}
                            consult a qualified doctor or dermatologist
                            immediately.
                        </span>
                    </p>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} DermaScan AI — All rights reserved.
            </footer>
        </main>
    );
}
