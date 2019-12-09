// https://adventofcode.com/2019/day/2 for puzzle and background story

let program = getGravityAssistProgram();
restoreStateOfProgram(program); // prior to begininning, we are restoring the state to what it was before the fire ;)
process(program);
console.log(`Here is what is left in position 0 at the end: ${program[0]}`);

// This input list of module mass is retrieved from https://adventofcode.com/2019/day/2/input
function getGravityAssistProgram(){
    return [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,10,23,1,23,13,27,1,6,27,31,1,9,31,35,2,10,35,39,1,39,6,43,1,6,43,47,2,13,47,51,1,51,6,55,2,6,55,59,2,59,6,63,2,63,13,67,1,5,67,71,2,9,71,75,1,5,75,79,1,5,79,83,1,83,6,87,1,87,6,91,1,91,5,95,2,10,95,99,1,5,99,103,1,10,103,107,1,107,9,111,2,111,10,115,1,115,9,119,1,13,119,123,1,123,9,127,1,5,127,131,2,13,131,135,1,9,135,139,1,2,139,143,1,13,143,0,99,2,0,14,0];
}

function restoreStateOfProgram(program) {
    // replace position 1 with the value 12 and replace position 2 with the value 2
    program[1] = 12;
    program[2] = 2;
}

function process(program)
{
    for (let i = 0; i < program.length; i=i+4) {
        let opcode = program[i];
        if (opcode === 99) {
            // terminate processing
            break;
        } else {
            operandIndex1 = program[i+1];
            operandIndex2 = program[i+2];
            outputIndex = program[i+3];

            switch (opcode) {
                case 1:
                    // handle addition
                    program[outputIndex] = program[operandIndex1] + program[operandIndex2];
                    break;
                case 2:
                    // handle multiplication
                    program[outputIndex] = program[operandIndex1] * program[operandIndex2];
                    break;
                default:
                    // should never happen...
                    return;
            }
        }
    }
}
