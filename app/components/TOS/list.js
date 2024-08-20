import { motion } from "framer-motion";
import Image from "next/image";

const Grid = () => {
  return (
    <article className="relative bg-white text-gray-900 pt-[10vw] pb-[10vw]">
      <div className="flex justify-center items-center min-h-screen p-4">
        <section className="w-full max-w-2xl">
          <div className="space-y-16">
            {/* Section: Agreement between User and Euclid Learn LLC */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Agreement between User and Euclid Learn LLC
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                Welcome to https://euclidlearn.com. The https://euclidlearn.com
                website (the &quot;Site&quot;) is comprised of various web pages
                operated by Euclid Learn LLC (&quot;Euclid Learn&quot;).
                https://euclidlearn.com is offered to you conditioned on your
                acceptance without modification of the terms, conditions, and
                notices contained herein (the &quot;Terms&quot;). Your use of
                https://euclidlearn.com constitutes your agreement to all such
                Terms. Please read these terms carefully, and keep a copy of
                them for your reference. Euclid Learn offers algorithmic
                programming coaching for students preparing for the USA
                Computing Olympiad, standardized tests, and other academic
                endeavors.
              </p>
            </section>

            {/* Section: Privacy Policy */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                Your use of https://euclidlearn.com is subject to Euclid
                Learn&apos;s Privacy Policy. Please review our Privacy Policy,
                which also governs the Site and informs users of our data
                collection practices.
              </p>
            </section>

            {/* Section: Electronic Communications */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Electronic Communications
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                Visiting https://euclidlearn.com or sending emails to Euclid
                Learn constitutes electronic communications. You consent to
                receive electronic communications and you agree that all
                agreements, notices, disclosures, and other communications that
                we provide to you electronically, via email and on the Site,
                satisfy any legal requirement that such communications be in
                writing.
              </p>
            </section>

            {/* Section: Your Account */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Your Account</h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                If you use this site, you are responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your computer, and you agree to accept responsibility
                for all activities that occur under your account or password.
                You may not assign or otherwise transfer your account to any
                other person or entity. You acknowledge that Euclid Learn is not
                responsible for third-party access to your account that results
                from theft or misappropriation of your account. Euclid Learn and
                its associates reserve the right to refuse or cancel service,
                terminate accounts, or remove or edit content in our sole
                discretion.
              </p>
            </section>

            {/* Section: Children Under Thirteen */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Children Under Thirteen
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                Euclid Learn does not knowingly collect, either online or
                offline, personal information from persons under the age of
                thirteen. If you are under 18, you may use
                https://euclidlearn.com only with the permission of a parent or
                guardian.
              </p>
            </section>

            {/* Section: Links to Third Party Sites/Third Party Services */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Links to Third Party Sites/Third Party Services
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                https://euclidlearn.com may contain links to other websites
                (&quot;Linked Sites&quot;). The Linked Sites are not under the
                control of Euclid Learn and Euclid Learn is not responsible for
                the contents of any Linked Site, including without limitation
                any link contained in a Linked Site, or any changes or updates
                to a Linked Site. Euclid Learn is providing these links to you
                only as a convenience, and the inclusion of any link does not
                imply endorsement by Euclid Learn of the site or any association
                with its operators. Certain services made available via
                https://euclidlearn.com are delivered by third-party sites and
                organizations. By using any product, service, or functionality
                originating from the https://euclidlearn.com domain, you hereby
                acknowledge and consent that Euclid Learn may share such
                information and data with any third party with whom Euclid Learn
                has a contractual relationship to provide the requested product,
                service, or functionality on behalf of https://euclidlearn.com
                users and customers.
              </p>
            </section>

            {/* Section: No Unlawful or Prohibited Use/Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                No Unlawful or Prohibited Use/Intellectual Property
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                You are granted a non-exclusive, non-transferable, revocable
                license to access and use https://euclidlearn.com strictly in
                accordance with these terms of use. As a condition of your use
                of the Site, you warrant to Euclid Learn that you will not use
                the Site for any purpose that is unlawful or prohibited by these
                Terms. You may not use the Site in any manner which could
                damage, disable, overburden, or impair the Site or interfere
                with any other party&apos;s use and enjoyment of the Site. You
                may not obtain or attempt to obtain any materials or information
                through any means not intentionally made available or provided
                for through the Site. All content included as part of the
                Service, such as text, graphics, logos, images, as well as the
                compilation thereof, and any software used on the Site, is the
                property of Euclid Learn or its suppliers and protected by
                copyright and other laws that protect intellectual property and
                proprietary rights. You agree to observe and abide by all
                copyright and other proprietary notices, legends or other
                restrictions contained in any such content and will not make any
                changes thereto. You will not modify, publish, transmit, reverse
                engineer, participate in the transfer or sale, create derivative
                works, or in any way exploit any of the content, in whole or in
                part, found on the Site. Euclid Learn content is not for resale.
                Your use of the Site does not entitle you to make any
                unauthorized use of any protected content, and in particular,
                you will not delete or alter any proprietary rights or
                attribution notices in any content. You will use protected
                content solely for your personal use and will make no other use
                of the content without the express written permission of Euclid
                Learn and the copyright owner. You agree that you do not acquire
                any ownership rights in any protected content. We do not grant
                you any licenses, express or implied, to the intellectual
                property of Euclid Learn or our licensors except as expressly
                authorized by these Terms.
              </p>
            </section>

            {/* Section: Third Party Accounts */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Third Party Accounts
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                You will be able to connect your Euclid Learn account to
                third-party accounts. By connecting your Euclid Learn account to
                your third-party account, you acknowledge and agree that you are
                consenting to the continuous release of information about you to
                others (in accordance with your privacy settings on those
                third-party sites). If you do not want information about you to
                be shared in this manner, do not use this feature.
              </p>
            </section>

            {/* Section: International Users */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                International Users
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                The Service is controlled, operated, and administered by Euclid
                Learn from our offices within the USA. If you access the Service
                from a location outside the USA, you are responsible for
                compliance with all local laws. You agree that you will not use
                the Euclid Learn Content accessed through
                https://euclidlearn.com in any country or in any manner
                prohibited by any applicable laws, restrictions, or regulations.
              </p>
            </section>

            {/* Section: Indemnification */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Indemnification</h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                You agree to indemnify, defend, and hold harmless Euclid Learn,
                its officers, directors, employees, agents, and third parties,
                for any losses, costs, liabilities, and expenses (including
                reasonable attorney&apos;s fees) relating to or arising out of
                your use of or inability to use the Site or services, any user
                postings made by you, your violation of any terms of this
                Agreement, your violation of any rights of a third party, or
                your violation of any applicable laws, rules, or regulations.
                Euclid Learn reserves the right, at its own cost, to assume the
                exclusive defense and control of any matter otherwise subject to
                indemnification by you, in which event you will fully cooperate
                with Euclid Learn in asserting any available defenses.
              </p>
            </section>

            {/* Section: Arbitration */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Arbitration</h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                In the event the parties are not able to resolve any dispute
                between them arising out of or concerning these Terms and
                Conditions, or any provisions hereof, whether in contract, tort,
                or otherwise at law or in equity for damages or any other
                relief, then such dispute shall be resolved only by final and
                binding arbitration pursuant to the Federal Arbitration Act,
                conducted by a single neutral arbitrator and administered by the
                American Arbitration Association, or a similar arbitration
                service selected by the parties, in a location mutually agreed
                upon by the parties. The arbitrator&apos;s award shall be final,
                and judgment may be entered upon it in any court having
                jurisdiction. In the event that any legal or equitable action,
                proceeding, or arbitration arises out of or concerns these Terms
                and Conditions, the prevailing party shall be entitled to
                recover its costs and reasonable attorney&apos;s fees. The
                parties agree to arbitrate all disputes and claims in regards to
                these Terms and Conditions or any disputes arising as a result
                of these Terms and Conditions, whether directly or indirectly,
                including Tort claims that are a result of these Terms and
                Conditions. The parties agree that the Federal Arbitration Act
                governs the interpretation and enforcement of this provision.
                The entire dispute, including the scope and enforceability of
                this arbitration provision shall be determined by the
                Arbitrator. This arbitration provision shall survive the
                termination of these Terms and Conditions.
              </p>
            </section>

            {/* Section: Liability Disclaimer */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                Liability Disclaimer
              </h2>
              <p className="text-base leading-6 mb-4 text-gray-500">
                THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
                AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR
                TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
                INFORMATION HEREIN. EUCLID LEARN LLC AND/OR ITS SUPPLIERS MAY
                MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME. EUCLID
                LEARN LLC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE
                SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY
                OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES, AND RELATED
                GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM
                EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION,
                SOFTWARE, PRODUCTS, SERVICES, AND RELATED GRAPHICS ARE PROVIDED
                &quot;AS IS&quot; WITHOUT WARRANTY OR CONDITION OF ANY KIND.
                EUCLID LEARN LLC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL
                WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION,
                SOFTWARE, PRODUCTS, SERVICES, AND RELATED GRAPHICS, INCLUDING
                ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. TO THE
                MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
                EUCLID LEARN LLC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT,
                INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES
                OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES
                FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY
                CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE
                DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE
                PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY
                INFORMATION, SOFTWARE, PRODUCTS, SERVICES, AND RELATED GRAPHICS.
              </p>
            </section>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Grid;
