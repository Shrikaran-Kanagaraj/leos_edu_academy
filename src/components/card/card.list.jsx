import {} from 'images';

export default function Cards() {
    return(
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16 ">
            
            #card1
            <div class="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110">
                <img class="w-full h-3/5" src="src\images\Rubik_cube.gif" alt="rubic_cube"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Rubik's Cubes</div>
                    <p class="text-gray-700 text-base">
                    Learn to solve different types of Rubick's Cubes in simpler way which sharpen your mind.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rubik's Cube</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Memory Span</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mind Power</span>
                </div>
            </div>

            #card2
            <div class="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110">
              <img class="w-full" src="src\images\Calligraphy.jpeg" alt="calligraphy"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Calligraphy</div>
                <p class="text-gray-700 text-base">
                  Learn Calligraphy online from one of our many classes, both hand drawn and digital.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Calligraphy</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hand Lettering</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Brush Art</span>
              </div>
            </div>

            #Card3
            <div class="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110">
              <img class="w-full" src="src\images\Abacus.gif" alt="abacus"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Abacus</div>
                <p class="text-gray-700 text-base">
                  Abacus course aims to develop brain by helping you improve your calculations, abilities, number sense, and mental arithmetic.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
              </div>
            </div>

            #card4
            <div class="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110">
              <img class="w-full h-72" src="src\images\Vedic-Maths.jpg" alt="vedic_math"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Vedic Math</div>
                <p class="text-gray-700 text-base">
                  Vedic Maths Will Enable You To Calculate Much Faster Compared To Conventional System.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vedic Math</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Speed Math</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Computation</span>
              </div>
            </div>

            #card5
            <div class="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-110">
              <img class="w-full h-72" src="src\images\HandWriting.jpeg" alt="handwriting"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Hand Writing</div>
                <p class="text-gray-700 text-base">
                  Learn how to improve your handwriting with fauxligraphy tools, water brush essentials, or pen and ink.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Hand Writing</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ink</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Better Script</span>
              </div>
            </div>




        </div>

    
    )
}