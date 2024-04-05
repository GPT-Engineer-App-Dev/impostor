import { Button, Grid, GridItem } from "@chakra-ui/react";

const GameBoard = () => {
  const boardSize = 8;

  return (
    <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={1}>
      {[...Array(boardSize)].map((_, row) =>
        [...Array(boardSize)].map((_, col) => (
          <GridItem key={`${row}-${col}`}>
            <Button width="100%" height="100%" />
          </GridItem>
        )),
      )}
    </Grid>
  );
};

export default GameBoard;
