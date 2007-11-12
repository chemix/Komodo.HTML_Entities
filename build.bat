REM
REM  Build Script
REM =====================

util\rm ..\komodo_html_entities.xpi
cd ..
mkdir build
mkdir build\chrome
REM util\zip -0 -r build\chrome\html_entities.xpi locale content skin
util\zip -0 -r build\chrome\html_entities.jar content skin

util\cp install.rdf build\install.rdf
util\cp chrome.manifest build\chrome.manifest

cd build
..\util\zip -r ..\komodo_html_entities.xpi *
cd ..
util\rm -rf build\