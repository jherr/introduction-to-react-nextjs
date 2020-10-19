import {
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import styled from "@emotion/styled";
import { withRouter } from "next/router";

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

export async function getStaticPaths() {
  const allPokemon = require("../../src/pokemon.json");
  return {
    paths: allPokemon.map((p) => ({
      params: {
        id: p.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const allPokemon = require("../../src/pokemon.json");
  const pokemon = allPokemon.find(
    ({ id }) => id.toString() === context.params.id
  );
  return {
    props: {
      pokemon,
    },
  };
}

export default withRouter(({ pokemon }) => {
  return (
    <PageContainer>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((k) => (
                <TableRow key={k}>
                  <TableCell>{k}</TableCell>
                  <TableCell>{pokemon.base[k]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </PageContainer>
  );
});
