REM
REM  Build Script
REM =====================

util\rm komodo_html_entities.xpi
mkdir build
mkdir build\chrome

util\zip -0 -r build\chrome\html_entities.jar content skin

util\cp install.rdf build\install.rdf
util\cp chrome.manifest build\chrome.manifest

cd build
..\util\zip -r ..\komodo_html_entities.xpi *
cd ..
util\rm -rf build\